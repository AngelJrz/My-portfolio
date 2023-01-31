import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import dynamic from "next/dynamic";
import theme from '../lib/theme';

const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	)
}

export default dynamic (() => Promise.resolve(Website), {ssr: false})
