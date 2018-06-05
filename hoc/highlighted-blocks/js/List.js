'use strict';

function viewsWrapper(Component) {
    return class extends React.Component {
        render() {
            // задаем обертку по умолчанию, которая просто выводит дочерний компонент "как есть"
            var WrapComponent = props => { return props.children }
            // если количество просмотров следует подсветить, то переопределяем обертку
            if (this.props.views > 1000) {
                WrapComponent = Popular
            } else if (this.props.views < 100) {
                WrapComponent = New
            }
            return (
                <WrapComponent>
                    <Component {...this.props} />
                </WrapComponent>
            )
        }
    }
}

const WrappedArticle = viewsWrapper(Article);
const WrappedVideo = viewsWrapper(Video);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WrappedVideo {...item} />
                );

            case 'article':
                return (
                    <WrappedArticle {...item} />
                );
        }
    });
};
