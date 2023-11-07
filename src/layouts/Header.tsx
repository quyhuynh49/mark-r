import girlIcon from '../assets/images/girl.png'
import Breadcrumbs from '../components/Breadcrumbs'
import CustomLink from '../components/CustomLink'
import Input from '../components/Input'
import Logo from '../components/Logo'
import EditIcon from '../components/icons/EditIcon'
import HomeIcon from '../components/icons/HomeIcon'
import SearchIcon from '../components/icons/SearchIcon'

function Header() {
    return (
        <header className='flex flex-col justify-between overflow-auto h-[175px] bg-[length:100%_100%] bg-header-cover bg-no-repeat bg-center'>
            <div className='container flex justify-between'>
                <div className='flex mt-[36px] gap-[40px]'>
                    <Logo />
                    <div className='flex gap-[10px]'>
                        <CustomLink startAdornment={<HomeIcon />} to="/home">Home</CustomLink>
                        <CustomLink startAdornment={<EditIcon />} to="/home/registration-database/new-registration">Registration Database</CustomLink>
                    </div>
                </div>
                <div className='flex'>
                    <Input className='mt-[36px] mr-[24px]' endAdornment={<SearchIcon />} />
                    <div className='w-[62px] h-[62px] mt-[30px] mr-[10px] cursor-pointer'>
                        <img className='w-full h-full' src={girlIcon} alt='avt' />
                    </div>
                    <p className='mt-[36px] font-sst text-[25px] font-[500] text-[#ffffff]'>Hi, Ho, Sylvia</p>
                </div>
            </div>
            <Breadcrumbs className='container mb-[32px]' />
        </header>
    )
}

export default Header
