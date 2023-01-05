import Icon from "./utils/Icon";
import 'animate.css';

export function Help() {
    return (
        <div className="help">
            <div className="comp_circle">
                <Icon icon='circle' color='red' />
                <b>Семья</b>
            </div>

            <div className="comp_circle">
                <Icon icon='circle' color='green' />
                <b>Здоровье</b>
            </div>

            <div className="comp_circle">
                <Icon icon='circle' color='purple' />
                <b>Хобби</b>
            </div>

            <div className="comp_circle">
                <Icon icon='circle' color='blue' />
                <b>Карьера</b>
            </div>

            <div className="comp_circle">
                <Icon icon='circle' color='orange' />
                <b>Друзья</b>
            </div>

            <div className="comp_circle">
                <Icon icon='circle' color='yellow' />
                <b>Саморазвитие</b>
            </div>



        </div>
    )
}