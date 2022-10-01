import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'

const DarkModeToggle = ({ data, setData, toShow }) => {
    return data.header.darkMode ? (
        <SunIcon
            w={6}
            h={6}
            color={'#F35523'}
            stroke={'black'}
            visibility={toShow ? 'visible' : 'hidden'}
            cursor={'pointer'}
        />
    ) : (
        <MoonIcon
            w={6}
            h={6}
            color={'#F3C623'}
            stroke={'black'}
            visibility={toShow ? 'visible' : 'hidden'}
            cursor={'pointer'}
        />
    )
}

const Notes = props => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill={'none'}>
            <path
                d="M16.7143 15.4286H24V1.28571C24 0.573214 23.4268 0 22.7143 0H1.28571C0.573214 0 0 0.573214 0 1.28571V22.7143C0 23.4268 0.573214 24 1.28571 24H15.4286V16.7143C15.4286 16.0071 16.0071 15.4286 16.7143 15.4286ZM23.625 18.375L18.375 23.625C18.1339 23.8661 17.8071 24 17.4643 24H17.1429V17.1429H24V17.4696C24 17.8071 23.8661 18.1339 23.625 18.375Z"
                fill="#FF9933"
            />
        </g>
    </Icon>
)

const Bookmark = props => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill={'none'}>
            <path
                d="M19.5789 0H4.42105C1.98316 0 0 1.884 0 4.2V24L8.8421 19.8L17.6842 24V13.2H24V4.2C24 1.884 22.0168 0 19.5789 0ZM21.4737 10.8H17.6842V4.2C17.6842 3.2076 18.5343 2.4 19.5789 2.4C20.6236 2.4 21.4737 3.2076 21.4737 4.2V10.8Z"
                fill="#138808"
            />
        </g>
    </Icon>
)

const Tick = props => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill={'none'}>
            <path
                d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.6 18L3.6 12L5.292 10.308L9.6 14.604L18.708 5.496L20.4 7.2L9.6 18Z"
                fill="#3090EA"
            />
        </g>
    </Icon>
)

const UnTick = props => (
    <Icon viewBox="0 0 26 26" {...props}>
        <g fill={'none'}>
            <path
                d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
                stroke="#3090EA"
                strokeWidth="2"
            />
        </g>
    </Icon>
)

const YouTube = props => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill={'none'}>
            <path
                d="M21.6 16.95C21.4 18 20.55 18.8 19.5 18.95C17.85 19.2 15.1 19.5 12 19.5C8.95 19.5 6.2 19.2 4.5 18.95C3.45 18.8 2.6 18 2.4 16.95C2.2 15.8 2 14.1 2 12C2 9.9 2.2 8.2 2.4 7.05C2.6 6 3.45 5.2 4.5 5.05C6.15 4.8 8.9 4.5 12 4.5C15.1 4.5 17.8 4.8 19.5 5.05C20.55 5.2 21.4 6 21.6 7.05C21.8 8.2 22.05 9.9 22.05 12C22 14.1 21.8 15.8 21.6 16.95Z"
                fill="#FF3D00"
            />
            <path d="M10 15.5V8.5L16 12L10 15.5Z" fill="white" />
        </g>
    </Icon>
)

const GfG = props => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill={'none'}>
            <path
                d="M14.5175 12C14.507 11.8355 14.5 11.6695 14.5 11.5C14.5 8.46 15.93 6.5 18 6.5C19.7055 6.5 21.165 7.831 21.5 10H22.5L22.5005 5.5H21.5C21.5 5.5 21.2335 6.253 21 6.08C20.0505 5.547 19.1385 5.514 17.988 5.514C15.088 5.514 12.5 8.13 12.5 11.46C12.5 11.642 12.5105 11.8215 12.5245 12H11.475C11.4895 11.8215 11.5 11.642 11.5 11.46C11.5 8.13 8.912 5.514 6.012 5.514C4.8615 5.514 3.9495 5.5465 3 6.08C2.7665 6.253 2.5 5.5 2.5 5.5H1.4995L1.5 10H2.5C2.835 7.831 4.2945 6.5 6 6.5C8.07 6.5 9.5 8.46 9.5 11.5C9.5 11.6695 9.493 11.8355 9.4825 12H0V13H0.5045C1.046 13 1.493 13.4305 1.504 13.9715C1.523 14.8945 1.612 16.003 2 16.5C2.6345 17.3125 3.5 18 6 18C8.511 18 10.96 15.7365 11.5 13H12.5C13.04 15.7365 15.489 18 18 18C20.5 18 21.3655 17.3125 22 16.5C22.388 16.003 22.477 14.8945 22.496 13.9715C22.507 13.4305 22.9545 13 23.4955 13H24V12H14.5175ZM5.7385 16.865C4.936 16.865 3.661 16.862 3.5 16C3.4455 15.7085 3.4545 14.7365 3.4715 13.977C3.484 13.4335 3.9275 13 4.4715 13H9.5C9.103 15.3905 7.5075 16.865 5.7385 16.865ZM20.5 16C20.339 16.862 19.064 16.865 18.2615 16.865C16.493 16.865 14.897 15.3905 14.5 13H19.5285C20.0725 13 20.516 13.4335 20.5285 13.977C20.5455 14.7365 20.5545 15.7085 20.5 16Z"
                fill="#43A047"
            />
        </g>
    </Icon>
)

const LeetCode = props => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill={'none'}>
            <path
                d="M22 14.355C22 13.613 21.436 13.01 20.74 13.01H10.676C9.98001 13.01 9.41602 13.614 9.41602 14.355C9.41602 15.097 9.98001 15.701 10.676 15.701H20.74C21.436 15.701 22 15.098 22 14.355Z"
                fill="#B3B1B0"
            />
            <path
                d="M22 14.355H9.41602C9.41602 15.097 9.98001 15.701 10.676 15.701H20.74C21.436 15.701 22 15.098 22 14.355Z"
                fill="#9C9A99"
            />
            <path
                d="M4.78099 14.355H4.73499C4.74999 15.091 5.04999 15.829 5.63199 16.423C6.94099 17.759 8.27099 19.073 9.59199 20.397L9.79598 20.595C10.265 20.898 10.269 21.845 9.97798 22.266C9.66798 22.715 9.26798 22.995 8.70698 22.995C8.68699 22.995 8.66599 22.995 8.64499 22.994C8.44499 22.987 8.28098 22.907 8.11498 22.813C8.07998 22.793 8.04498 22.773 8.01098 22.751C8.96299 23.593 10.221 24 11.599 24C13.083 24 14.429 23.489 15.403 22.506L17.992 19.869C18.502 19.355 18.484 18.504 17.953 17.969C17.681 17.694 17.326 17.556 16.975 17.556C16.643 17.556 16.316 17.68 16.069 17.93L13.393 20.537C12.931 21.004 12.291 21.199 11.585 21.199C10.879 21.199 10.239 21.004 9.77498 20.537L5.47799 16.174C5.02399 15.716 4.78999 15.052 4.78099 14.355Z"
                fill="#C98F1B"
            />
            <path
                d="M4.73497 14.355H1.91797C1.92397 15.84 2.51297 17.3 3.65697 18.456C4.98097 19.792 6.31397 21.119 7.64097 22.452C7.75397 22.566 7.87697 22.667 8.01097 22.752C8.04497 22.773 8.07897 22.794 8.11497 22.814C8.28097 22.908 8.44497 22.988 8.64497 22.995C8.66597 22.996 8.68597 22.996 8.70697 22.996C9.26797 22.996 9.66797 22.716 9.97797 22.267C10.269 21.846 10.264 20.899 9.79597 20.596L9.59197 20.398C8.27097 19.074 6.93997 17.76 5.63197 16.424C5.04997 15.83 4.74997 15.091 4.73497 14.355Z"
                fill="#060605"
            />
            <path
                d="M3.483 18.187L7.795 22.548C8.767 23.527 10.113 24 11.599 24C13.083 24 14.429 23.489 15.403 22.506L17.992 19.869C18.502 19.355 18.484 18.504 17.953 17.969C17.423 17.434 16.578 17.416 16.069 17.93L13.393 20.537C12.931 21.004 12.291 21.199 11.585 21.199C10.879 21.199 10.239 21.004 9.775 20.537L5.478 16.174C5.015 15.706 4.781 15.024 4.781 14.311C4.781 13.598 5.015 12.954 5.478 12.487L9.763 8.10698C10.227 7.63898 10.879 7.46198 11.585 7.46198C12.292 7.46198 12.932 7.65698 13.393 8.12398L16.069 10.73C16.579 11.245 17.423 11.227 17.954 10.692C18.485 10.156 18.503 9.30598 17.993 8.79098L15.404 6.15598C14.756 5.50998 13.933 5.03998 13.012 4.82598L12.979 4.81998L15.426 2.31598C15.938 1.80198 15.92 0.949983 15.389 0.414983C14.859 -0.120017 14.013 -0.138017 13.502 0.376983L3.483 10.476C2.509 11.458 2 12.814 2 14.312C2 15.81 2.509 17.206 3.483 18.187Z"
                fill="#E7A41F"
            />
            <path
                d="M8.11495 22.814C7.93895 22.717 7.78295 22.595 7.64095 22.453C6.31395 21.12 4.98095 19.793 3.65695 18.457C1.66895 16.448 1.35495 13.521 2.87195 11.137C3.10595 10.767 3.40095 10.443 3.71095 10.133C6.91895 6.91901 10.126 3.70301 13.334 0.489009C13.959 -0.136991 14.831 -0.162991 15.413 0.423009C15.972 0.985009 15.94 1.87801 15.336 2.48801C14.566 3.26401 13.796 4.03801 13.026 4.81301C12.985 4.93501 12.886 5.01301 12.8 5.10001C11.937 5.97701 11.049 6.83001 10.2 7.71901C10.089 7.83401 9.93795 7.90501 9.82795 8.02401C8.40495 9.44701 6.96595 10.854 5.56295 12.296C4.42695 13.463 4.46695 15.234 5.63095 16.424C6.93995 17.76 8.26995 19.074 9.59095 20.398L9.79495 20.596C10.264 20.899 10.268 21.846 9.97695 22.267C9.65595 22.733 9.23795 23.017 8.64395 22.995C8.44495 22.987 8.28095 22.907 8.11495 22.814Z"
                fill="#070706"
            />
            <path
                d="M13.0209 4.826C12.9769 4.941 12.8829 5.016 12.7999 5.099C11.9369 5.976 11.0489 6.829 10.1999 7.718C10.0889 7.833 9.93795 7.904 9.82795 8.023C8.40495 9.446 6.96595 10.853 5.56295 12.295C4.98295 12.891 4.70995 13.644 4.73595 14.397H4.78195C4.78095 14.368 4.77995 14.339 4.77995 14.31C4.77995 13.597 5.01395 12.953 5.47695 12.486L9.76195 8.106C10.2259 7.638 10.8779 7.461 11.5839 7.461C12.2909 7.461 12.9309 7.656 13.3919 8.123L16.0679 10.729C16.3159 10.98 16.6439 11.104 16.9759 11.104C17.3259 11.104 17.6809 10.966 17.9529 10.691C18.4839 10.155 18.5019 9.305 17.9919 8.79L15.4029 6.155C14.7569 5.51 13.9379 5.041 13.0209 4.826ZM14.3999 0C14.2059 0.001 14.0139 0.045 13.8379 0.132C14.0209 0.049 14.2119 0.005 14.3999 0Z"
                fill="#EAB03C"
            />
            <path
                d="M14.432 0C14.422 0 14.411 0 14.401 0C14.212 0.004 14.022 0.049 13.839 0.132C13.661 0.213 13.49 0.332 13.335 0.488C10.127 3.702 6.91903 6.918 3.71203 10.132C3.40203 10.442 3.10803 10.766 2.87303 11.136C2.22103 12.161 1.90703 13.287 1.91903 14.398H4.73703C4.71103 13.645 4.98503 12.892 5.56403 12.296C6.96603 10.854 8.40603 9.447 9.82903 8.024C9.94003 7.905 10.09 7.835 10.201 7.719C11.05 6.83 11.938 5.977 12.801 5.1C12.884 5.016 12.978 4.941 13.022 4.827C13.024 4.822 13.025 4.818 13.027 4.813C13.797 4.038 14.567 3.264 15.337 2.488C15.941 1.878 15.974 0.985 15.414 0.423C15.133 0.14 14.786 0 14.432 0Z"
                fill="#272726"
            />
        </g>
    </Icon>
)

export { Bookmark, DarkModeToggle, GfG, LeetCode, Notes, Tick, UnTick, YouTube }
