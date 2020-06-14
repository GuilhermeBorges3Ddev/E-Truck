import React, { Component } from 'react';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonNext } from './styles';

import uberx from '../../../assets/uberx.png';

export default class Details extends Component {
	render() {
		return <Container>
			<TypeTitle>Popular</TypeTitle>
			<TypeDescription>Viagem com o Tsunami!</TypeDescription>

			<TypeImage source={uberx} />
			<TypeTitle>TsunamiX</TypeTitle>
			<TypeDescription>R$ DE GRAÇA</TypeDescription>

			<RequestButton onPress={() => {}}>
				<RequestButtonNext>Chamar o Tsunami</RequestButtonNext>
			</RequestButton>
		</Container>
	}
}