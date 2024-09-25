// Redux libs imports
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// app libs improts
import { effects } from '../store';

export const useActionsWithEffects = () => {
    const dispatch = useDispatch();
    return bindActionCreators(effects, dispatch);
}

