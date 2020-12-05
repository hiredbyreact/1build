import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
	ctaBtn: {
		color: '#2F80ED',
		fontSize: 12,
		fontWeight: 700,
		textTransform: 'capitalize',
		'& svg': {
			marginLeft: 10,
		},
	},
}));

export default Styles;
