import Link from 'next/link'
import BoxesLogo  from './icons/boxeslogo'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	&:hover img {
	  transform: rotate(20deg);
	}
`

const Logo = () => {
	return (
		<Link href="/">
				<LogoBox>
					<BoxesLogo/>
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily='M PLUS Rounded 1c'
						fontWeight="bold"
						ml={3}>
						AngelJrz
					</Text>
				</LogoBox>
		</Link>
	)
}

export default Logo
