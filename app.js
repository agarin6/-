document.addEventListener('DOMContentLoaded', function () {
    // Массив объектов с данными о курсах
    const courses = [
        { name: 'Web Development', duration: '3 months', price: '$300', image: 'https://blog.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp' },
        { name: 'Data Science', duration: '4 months', price: '$400', image: 'https://www.sudeep.co/images/post_images/2018-02-09-Understanding-the-Data-Science-Lifecycle/chart.png' },
        { name: 'Machine Learning', duration: '5 months', price: '$500', image: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds' }
    ];

    // Функциональный компонент
    const CourseTable = (props) => {
        const { organization, courses } = props;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                `Организация: ${organization}`
            ),
            React.createElement(
                'table',
                { border: '1' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement('th', null, 'Название курса'),
                        React.createElement('th', null, 'Длительность'),
                        React.createElement('th', null, 'Цена'),
                        React.createElement('th', null, 'Изображение')
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    courses.map((course, index) =>
                        React.createElement(
                            'tr',
                            { key: index },
                            React.createElement('td', null, course.name),
                            React.createElement('td', null, course.duration),
                            React.createElement('td', null, course.price),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('img', { src: course.image, alt: course.name, width: 100 })
                            )
                        )
                    )
                )
            )
        );
    };

    CourseTable.propTypes = {
        organization: PropTypes.string.isRequired,
        courses: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                duration: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired
            })
        ).isRequired
    };

    const rootElement = document.getElementById('root');
    ReactDOM.render(React.createElement(CourseTable, { organization: "Компьютерная школа", courses: courses }), rootElement);
});
