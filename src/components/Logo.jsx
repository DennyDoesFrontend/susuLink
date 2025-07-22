import image from '/susuLink-logo.png'

export default function Logo() {
    return (
        <div className='flex gap-4 items-center'>
            <img src={image} alt="Logo" className='w-12 rounded-md shadow-md'/>
            <span className='text-clBlue text-3xl font-poppins font-medium'>SusuLink</span>
        </div>
    )
}