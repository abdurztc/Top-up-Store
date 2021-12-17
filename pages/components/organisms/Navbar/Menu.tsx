interface MenuProps {
    title: string;
}
export default function Menu(props : MenuProps) {
    const {title} = props;
    return (
        <li className="nav-item my-auto">
                  <a className="nav-link active" aria-current="page" href="#">
                    {title}
                  </a>
                </li>
    )
}
