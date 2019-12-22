import { connect } from 'react-redux';
import ProgressBarScreen from '../../components/screens/progressBar/progressBarScreen';
import { getData } from '../../redux/actions/progressBar/progressBarAction';

const mapStateToProps = (state) => {
    return {
        progress: state.progress
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        _getData: () => {
            dispatch(getData())
        },
    };
}

const ProgressBarContainer = connect(mapStateToProps, mapDispatchToProps)(ProgressBarScreen);

export default ProgressBarContainer;
