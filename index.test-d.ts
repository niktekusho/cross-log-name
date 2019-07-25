import {expectType} from 'tsd';
import * as getLogName from '.';

expectType<string>(getLogName(undefined, {
	basename: 'test'
}));
