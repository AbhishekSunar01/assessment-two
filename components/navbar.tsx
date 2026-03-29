  export default function Navbar() {
  return (
    <nav className="border-b px-72 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">Food Ordering App</div>
        <div>
          <a href="/" className="rounded px-3 py-2">
            Home
          </a>
          <a href="/menu" className="rounded px-3 py-2">
            Menu
          </a>
          <a href="/orders" className="rounded px-3 py-2">
            Orders
          </a>
          <a href="/contact" className="rounded px-3 py-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
