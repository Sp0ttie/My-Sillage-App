import { Search, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Camera/Scanner Area */}
      <div className="flex-1 bg-[#f3efe9] flex items-center justify-center relative">
        {/* Scan Frame */}
        <div className="w-64 h-64 border-2 border-dashed border-[#a78bfa] rounded-lg flex items-center justify-center">
          <p className="text-center text-sm text-[#6b7280] px-6">
            Position your camera to scan a fragrance bottle
          </p>
        </div>
        
        {/* Scan Button */}
        <div className="absolute bottom-6">
          <Button 
            className="bg-[#a78bfa] hover:bg-[#9061f9] rounded-full h-14 w-14 p-0"
            size="icon"
          >
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Recently Scanned Section */}
      <div className="p-4 bg-white border-t border-[#e8e1d9]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Recently Scanned</h3>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-[#6b7280] hover:text-[#a78bfa]">
            <Clock className="h-4 w-4" />
            <span>History</span>
          </Button>
        </div>
        
        {/* Fragrance Items */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-shrink-0 w-20">
              <div className="h-24 bg-[#f3efe9] rounded-lg flex items-center justify-center mb-1">
                <div className="w-10 h-20 bg-gradient-to-b from-amber-100 to-amber-200 rounded-sm shadow-sm"></div>
              </div>
              <p className="text-xs text-center truncate">Maison Margiela</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}