import Logo from '@/assets/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { TAB_LIST_HEADER } from '@/lib/constants'
import { Link } from '@/router'
import { CircleUser, Info, Search } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 shadow-sm fixed z-50 bg-background w-full">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img src={Logo} alt="logo" width={150} />
        </Link>
        <ul className="flex  gap-10 ">
          {TAB_LIST_HEADER.map(tab => (
            <li key={tab.id} className="group relative cursor-pointer">
              <p className="font-bold">{tab.title}</p>
              <ul className="absolute hidden w-40 rounded-md border bg-background py-2 -left-2 shadow-md group-hover:block z-10">
                {tab.child.map(child => (
                  <li className="rounded-sm px-4 py-1 hover:bg-secondary">{child.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="group relative w-1/4">
        <Input className="h-8 rounded-full pl-3 pr-9 focus-visible:ring-ring focus-visible:ring-offset-0" />
        <Search className="absolute right-2 top-1 text-primary-foreground group-hover:text-primary group-focus-visible:text-primary" />
      </div>
      <div className="flex gap-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
          <Info />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary outline-none">
            <CircleUser />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="cursor-pointer">
              <p>Xuna</p>
              <p className="text-xs font-light">View profile</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Disussions</DropdownMenuItem>
            <DropdownMenuItem>Lists</DropdownMenuItem>
            <DropdownMenuItem>Ratings</DropdownMenuItem>
            <DropdownMenuItem>Watchlist</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
