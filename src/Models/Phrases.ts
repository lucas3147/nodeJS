import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/ms';

export interface PhraseInstance extends Model {
    id: number;
    author: string;
    phrase: string;
}

export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    phrase: {
        type: DataTypes.STRING
    },
    tableName: 'phrases',
    timestamps: false
});