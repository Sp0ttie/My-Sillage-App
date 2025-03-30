import { Search, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="h-full">
      <ARScreen />
    </div>
  )
}

function ARScreen() {
  return (
    <div className="h-full flex flex-col">
      <div className="relative flex-1 bg-[#f3efe9] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-dashed border-[#a78bfa] rounded-lg flex items-center justify-center">
            <p className="text-center font-sans text-sm text-[#6b7280] px-6">
              Position your camera to scan a fragrance bottle
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <Button className="bg-[#a78bfa] hover:bg-[#9061f9] rounded-full h-14 w-14 flex items-center justify-center">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-[#e8e1d9]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Recently Scanned</h3>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-[#6b7280] hover:text-[#a78bfa]">
            <Clock className="h-4 w-4" />
            <span>History</span>
          </Button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-shrink-0 w-20">
              <div className="h-24 bg-[#f3efe9] rounded-lg flex items-center justify-center mb-1">
                <img src="/placeholder.svg?height=80&width=40" alt="Fragrance bottle" className="h-20 object-contain" />
              </div>
              <p className="text-xs text-center truncate">Maison Margiela</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

