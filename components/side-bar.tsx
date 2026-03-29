"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Burgers", icon: "🍔" },
  { name: "Pizza", icon: "🍕" },
  { name: "Noodles", icon: "🍜" },
  { name: "Salads", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
]

export default function Sidebar() {
  const [active, setActive] = useState("Burgers")

  return (
    <div className="h-screen w-64 space-y-2 border-r p-4">
      <h2 className="mb-4 text-xl font-semibold">Food Menu</h2>

      {categories.map((cat) => (
        <Button
          key={cat.name}
          variant={active === cat.name ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActive(cat.name)}
        >
          <span className="mr-2">{cat.icon}</span>
          {cat.name}
        </Button>
      ))}
    </div>
  )
}
