'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Skills data organized by category
const skills = [
  // AI/ML
  { name: 'PyTorch', category: 'AI/ML', color: '#EE4C2C' },
  { name: 'TensorFlow', category: 'AI/ML', color: '#FF6F00' },
  { name: 'LLMs', category: 'AI/ML', color: '#10B981' },
  { name: 'NLP', category: 'AI/ML', color: '#06B6D4' },
  { name: 'Computer Vision', category: 'AI/ML', color: '#8B5CF6' },
  { name: 'RAG Systems', category: 'AI/ML', color: '#EC4899' },

  // Backend/Infrastructure
  { name: 'Python', category: 'Backend', color: '#3776AB' },
  { name: 'FastAPI', category: 'Backend', color: '#009688' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED' },
  { name: 'Kubernetes', category: 'DevOps', color: '#326CE5' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'GCP', category: 'Cloud', color: '#4285F4' },

  // Data & Processing
  { name: 'Apache Spark', category: 'Data', color: '#E25A1C' },
  { name: 'SQL', category: 'Data', color: '#CC2927' },
  { name: 'PostgreSQL', category: 'Data', color: '#336791' },
  { name: 'MongoDB', category: 'Data', color: '#47A248' },

  // Frontend
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06B6D4' },
]

// Generate sphere coordinates
const generateSpherePoints = (count, radius = 180) => {
  const points = []
  const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const radiusAtY = Math.sqrt(1 - y * y)
    const theta = phi * i

    points.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    })
  }

  return points
}

export default function SkillConstellation({ width = 650, height = 650 }) {
  const canvasRef = useRef(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [clickedSkill, setClickedSkill] = useState(null)
  const [rotation, setRotation] = useState(0)
  const isHoveringRef = useRef(false)
  const spherePoints = useRef(generateSpherePoints(skills.length))
  const projectedPointsRef = useRef([]) // Store current positions
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const centerX = width / 2
    const centerY = height / 2

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Auto-rotate slowly only when not hovering
      if (!isHoveringRef.current) {
        setRotation((prev) => prev + 0.0001)
      }

      // Calculate 3D positions and sort by z-depth
      const projectedPoints = spherePoints.current.map((point, index) => {
        // Rotate around Y axis
        const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation)
        const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation)

        // Simple perspective projection
        const scale = 300 / (300 + rotatedZ)
        const x2d = centerX + rotatedX * scale
        const y2d = centerY + point.y * scale

        return {
          x: x2d,
          y: y2d,
          z: rotatedZ,
          scale,
          skill: skills[index],
          index,
        }
      })

      // Sort by z-depth (back to front)
      projectedPoints.sort((a, b) => a.z - b.z)

      // Store for hit detection
      projectedPointsRef.current = projectedPoints

      // Draw connections between nearby points (create connected graph)
      ctx.lineWidth = 2.5

      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].x - projectedPoints[j].x
          const dy = projectedPoints[i].y - projectedPoints[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4
            ctx.strokeStyle = `rgba(202, 138, 4, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y)
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw points with uniform single color (amber/gold)
      projectedPoints.forEach((point) => {
        const size = 4 + point.scale * 5
        const opacity = 0.4 + point.scale * 0.6

        // Glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = '#ca8a04'

        // Draw point in single color (amber)
        ctx.fillStyle = '#ca8a04'
        ctx.globalAlpha = opacity
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Reset shadow
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [rotation, width, height])

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Use the stored projected points for accurate hit detection
    // Find the closest point to the viewer (highest z value) among points in hitbox
    let found = null
    let maxZ = -Infinity

    projectedPointsRef.current.forEach((point) => {
      const dx = mouseX - point.x
      const dy = mouseY - point.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Larger hitbox for easier hovering
      const hitboxRadius = 4 + point.scale * 5 + 18
      if (distance < hitboxRadius && point.z > maxZ) {
        maxZ = point.z
        found = { skill: point.skill, x: point.x, y: point.y, z: point.z }
      }
    })

    setHoveredSkill(found)
  }

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Use the stored projected points for accurate hit detection
    // Find the closest point to the viewer (highest z value) among points in hitbox
    let found = null
    let maxZ = -Infinity

    projectedPointsRef.current.forEach((point) => {
      const dx = mouseX - point.x
      const dy = mouseY - point.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      const hitboxRadius = 4 + point.scale * 5 + 18
      if (distance < hitboxRadius && point.z > maxZ) {
        maxZ = point.z
        found = { skill: point.skill, x: point.x, y: point.y, z: point.z }
      }
    })

    // Toggle clicked skill
    if (found) {
      if (clickedSkill && clickedSkill.skill.name === found.skill.name) {
        setClickedSkill(null) // Unclick if same skill
      } else {
        setClickedSkill(found)
      }
    } else {
      setClickedSkill(null) // Clear if clicking empty space
    }
  }

  const handleMouseEnter = () => {
    isHoveringRef.current = true
  }
  const handleMouseLeave = () => {
    setHoveredSkill(null)
    isHoveringRef.current = false
  }

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="cursor-pointer"
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      {/* Skill tooltip - show either clicked or hovered */}
      <AnimatePresence>
        {(clickedSkill || hoveredSkill) && canvasRef.current && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute z-50 rounded-lg bg-gray-900/95 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-sm dark:bg-gray-100/95 dark:text-gray-900"
            style={{
              left: `${(clickedSkill || hoveredSkill).x}px`,
              top: `${(clickedSkill || hoveredSkill).y - 40}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="whitespace-nowrap">{(clickedSkill || hoveredSkill).skill.name}</span>
              <span className="text-xs opacity-70">
                {(clickedSkill || hoveredSkill).skill.category}
              </span>
            </div>
            {/* Arrow */}
            <div
              className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900/95 dark:border-t-gray-100/95"
              style={{ marginTop: '-1px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Click or hover to explore • {skills.length} skills
        </p>
      </div>
    </div>
  )
}
