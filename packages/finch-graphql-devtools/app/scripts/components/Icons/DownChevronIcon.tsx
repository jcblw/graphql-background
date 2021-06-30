import { Icon, IconProps } from '@chakra-ui/icons'

export const DownChevronIcon: React.FC<IconProps> = props => {
  return (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
      ></path>
    </Icon>
  )
}
