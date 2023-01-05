import Icon from "./utils/Icon";

export function Header() {
    return (
        <div className="header">
            <div className="nameWebsite">come true.</div>
            <div className="icons">
                <div className="icon_list">
                    <Icon icon='list' />
                    <b>Wishlist</b>
                </div>

                <div className="icon_list">
                    <Icon icon='bowl-food' />
                    <b>Your menu</b>
                </div>

                <div className="icon_list">
                    <Icon icon='glass-water' />
                    <b>Water</b>
                </div>


            </div>

        </div>
    )
}