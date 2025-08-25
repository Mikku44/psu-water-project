

interface IAvatar {
    src? :string
    name ? : string
    position ? :string
}

export default function Avatar ({
    src = "",
    name = "",
    position = ""
}:Readonly<IAvatar>) {
  return (
    <div className='flex items-center gap-5 max-w-[320px] p-5 '>
      <div className='rounded-full size-[80px] min-w-[80px] bg-amber-100'>
        {src && <img 
        className="w-full h-full"
        src={src} alt={name} />}
      </div>
      <div className=''>
        <div className='text-lg font-medium text-[var(--primary)]'>
          {name}
        </div>
        <div className='text-sm text-black/80'>{position}</div>
      </div>
    </div>
  )
}
