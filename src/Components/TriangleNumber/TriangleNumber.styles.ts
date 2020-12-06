import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
	triangleNumber: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 28,
		height: 28,
		'& svg': {
			position: 'absolute',
		},
	},
}));

export default Styles;
