import { makeStyles } from '@material-ui/core/styles';

const TopNavStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		borderBottom: '1px solid #E5DEDE',
	},
	menuButton: {
		// marginRight: theme.spacing(2)
	},
	mainNav: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-end',
		marginRight: 60,
		'& > *': {
			padding: 16,
		},
	},
}));

export default TopNavStyles;
