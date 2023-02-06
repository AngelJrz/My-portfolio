import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"; 
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="backend">
			<Container>
				<Title>
					Backend-store <Badge>2023</Badge>
				</Title>
				<P>
					A simple structure to create a retail system.
				</P>

				<List ml={4} my={4}>

					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.google.com">
							Link to Website <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>

					<ListItem>
						<Meta>Stack</Meta>
						<span>NodeJS, Electron, React Native</span>
					</ListItem>

				</List>

				<WorkImage src="/images/works/stores.jpg" />
			</Container>
		</Layout>
	)
}

export default Work
