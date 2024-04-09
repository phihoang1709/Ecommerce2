import SectionLayout from '../../layouts/SectionLayout'
import Card from '../Card'
const News = () => {
    return (
        <>
            <SectionLayout className='news' title='News'>
                <ul className="news__list">
                    <li className="news__item">
                        <Card sale={-10} title={'Syltherine'} cate={'Stylish cafe chair'} price={3500000} image={'new1'} />
                    </li>
                    <li className="news__item">
                        <Card sale={-10} title={'Syltherine'} cate={'Stylish cafe chair'} price={2500000} image={'new2'} />
                    </li>
                    <li className="news__item">
                        <Card sale={-10} title={'Syltherine'} cate={'Stylish cafe chair'} price={14000000} image={'new3'} />
                    </li>
                    <li className="news__item">
                        <Card sale={-10} title={'Syltherine'} cate={'Stylish cafe chair'} price={5000000} image={'new1'} />
                    </li>
                </ul>
            </SectionLayout>
        </>
    )
}

export default News