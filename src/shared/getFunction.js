import { createFunction } from '../Ractive/config/runtime-parser';
import { create, keys } from 'utils/object';

const functions = create( null );

export default function getFunction ( str, i ) {
	if ( functions[ str ] ) return functions[ str ];
	return functions[ str ] = createFunction( str, i );
}

export function addFunctions( template ) {
	if ( !template ) return;

	const exp = template.e;

	if ( !exp ) return;

	keys( exp ).forEach( ( str ) => {
		if ( functions[ str ] ) return;
		functions[ str ] = exp[ str ];
	});
}


