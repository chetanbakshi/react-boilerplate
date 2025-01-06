import './footer.style.scss';
export const FooterComponent: React.FC = () => {
    return (
        <footer>
            <div className='version'>Version 1.0</div>
            <div className='github-link'><a target='_blank' href='https://github.com/chetanbakshi/react-boilerplate'>Github</a></div>
        </footer>
    )
}