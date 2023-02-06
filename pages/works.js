import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import backendstorelogo from '../public/images/backendstorelogo.jpg'

const Works = () => {
	return(
		<Container>
			<Heading as="h3" fontSize={20} mb={4} mt={10}>
				My Works
			</Heading>

			<SimpleGrid columns={[1,1,2]} gap={6}>

				<Section delay={0.1}>
					<WorkGridItem id="backend" title="Backend store" thumbnail={backendstorelogo}>
						A simple backend to retail apps
						</WorkGridItem>
				</Section>

				<Section delay={0.2}>
					<WorkGridItem id="backend" title="Backend store" thumbnail={backendstorelogo}>
						A simple backend to retail apps
						</WorkGridItem>
				</Section>

				<Section delay={0.3}>
					<WorkGridItem id="backend" title="Backend store" thumbnail={backendstorelogo}>
						A simple backend to retail apps
						</WorkGridItem>
				</Section>

				<Section delay={0.4}>
					<WorkGridItem id="backend" title="Backend store" thumbnail={backendstorelogo}>
						A simple backend to retail apps
						</WorkGridItem>
				</Section>

			</SimpleGrid>

			<Divider my={6}/>

			<Heading as="h3" fontSize={20} mb={4}>
			Other Works	
			</Heading>

			<SimpleGrid columns={[1,1,2]} gap={6}>
				<Section delay={0.5}>
					<WorkGridItem id="backend" title="Backend store" thumbnail={backendstorelogo}>
						A simple backend to retail apps
						</WorkGridItem>
				</Section>
			</SimpleGrid>

		</Container>
	)
}

export default Works
