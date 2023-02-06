import { SimpleGrid, Heading, Container } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import postImage from '../public/images/postimage.jpg'

const Posts = () => (
	<Layout title="Post">
		<Container>
			<Heading as="h4" fontSize={20} mb={4}>
				My post
			</Heading>
			<Section delay={0.1}>
				<SimpleGrid columns={[1,2,2]} gap={6}>

					<GridItem title="My first project" thumbnail={postImage} href="https://www.google.com" />
					<GridItem title="My first project" thumbnail={postImage} href="https://www.google.com" />
					<GridItem title="My first project" thumbnail={postImage} href="https://www.google.com" />
					<GridItem title="My first project" thumbnail={postImage} href="https://www.google.com" />

				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
)

export default Posts
