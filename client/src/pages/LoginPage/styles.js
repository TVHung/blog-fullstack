import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
      width: '50%',
      margin: 'auto',
    },
    title: {
      textAlign: 'center',
      fontSize: 50,
    },

    textFeild: {
      fontSize: 30,
    },

    input: {
      width: '100%',
      height: 60,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 25,
      borderColor: '#4CAF50',
      padding: 0,
    },

    submit: {
      width: '100%',
      height: 60,
      backgroundColor: 'coral',
      color: '#fff',
      fontSize: 30,
      border: 'none',
      borderRadius: 5,
      marginTop: 20,
      marginBottom: 20,
      cursor: 'pointer',
      paddingLeft: 10,
      paddingRight: 10,
    },

    link: {
      fontSize: 25,
      cursor: 'pointer',
    },
    linkHover: {
      color: '#4CAF50'
    }
}));