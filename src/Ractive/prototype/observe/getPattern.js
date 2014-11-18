import getMatchingKeypaths from 'shared/keypaths/getMatching';

export default function getPattern ( ractive, pattern ) {
	var matchingKeypaths, values;

	matchingKeypaths = getMatchingKeypaths( ractive, pattern );

	values = {};
	matchingKeypaths.forEach( keypath => {
		values[ keypath ] = ractive.get( keypath );
	});

	return values;
}
