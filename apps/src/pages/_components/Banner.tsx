import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IMAGE_URL } from '@/lib/request'

interface BannerProps {
  data: Array<{ backdrop_path: string }>
}

export default function Banner({ data }: BannerProps) {
  if (!data) {
    return null
  }
  const index = Math.floor(Math.random() * data.length)
  const imgUrl = `${IMAGE_URL}/${data[index].backdrop_path}`

  return (
    <div className="relative flex h-96 flex-col justify-between overflow-hidden">
      <div className=" grayscale">
        <img src={imgUrl} alt="banner" />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 w-1/2 translate-x-[-50%] translate-y-[-50%] space-y-10">
        <div className="text-outline text-primary-foreground">
          <p className="text-4xl font-bold ">Welcome.</p>
          <p className="text-xl">Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <div className='relative'>
          <Input
            className="h-10 rounded-full pl-3 pr-20 focus-visible:ring-ring focus-visible:ring-offset-0"
            placeholder="Search for a movie, tv show, person,..."
          />
          <Button className='absolute top-0 right-0 rounded-full' type='submit'>Search</Button>
        </div>
      </div>
    </div>
  )
}
