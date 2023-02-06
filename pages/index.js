import NextLink from 'next/link'
import { Container, Box, Heading, Image, chakra, useColorModeValue, Link, Button } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import {ChevronRightIcon} from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
	return(
		<Container> 
			<Box display={{md: 'flex'}} mt={10}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						AngelJrz
					</Heading>
					<p>Digital Craftzman (artist, developer)</p>
				</Box>
				<Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
					<Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profilepic.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
				</Box>
			</Box>

			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={10} mt={5} align="center">
        Software engineer tinkering with systems
			</Box>

      <Section delay={0.2}>

        <Heading as="h3" variant="section-title">
         My work 
        </Heading>
        <Paragraph>
          This is the principal description of the portfolio where you can put your information, also you can show some of your work like{' '}
          <NextLink href="/work/backend-store">
            <Link>Backend Store</Link>
          </NextLink>.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>

      </Section>

      <Section delay={0.3}>

        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>1984</BioYear>
          Born in Xalapa, México.
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Get Software Engineer Degree
        </BioSection>

        <BioSection>
          <BioYear>2023 to present</BioYear>
          Work as a engineer
        </BioSection>

      </Section>

      <Section delay={0.4}>

        <Heading as="h3" variant="section-title">
          I Love
        </Heading>

        <Paragraph>
          Art, Music,{' '}
          <Link href='www.google.com'>
            Drawing
          </Link>
          .
        </Paragraph>

      </Section>
		</Container>

	)
}

export default Page
