const parseEnvVariable = (
	variable: string | undefined,
	variableName: string
) => {
	if (!variable) {
		throw `There is no environment variable called ${variableName}`;
	}

	return variable;
};

export const NEXT_PUBLIC_APP_NAME = parseEnvVariable(
	process.env.NEXT_PUBLIC_APP_NAME,
	'NEXT_PUBLIC_APP_NAME'
);

export const NEXT_PUBLIC_APP_ACRONYM = parseEnvVariable(
	process.env.NEXT_PUBLIC_APP_ACRONYM,
	'NEXT_PUBLIC_APP_ACRONYM'
);
