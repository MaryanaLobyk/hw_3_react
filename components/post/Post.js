import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, selectById} = this.props;
        return (
            <div>
                {item.id} - {item.title} -
                <button onClick={() => selectById(item.id)}>Choose</button>
            </div>
        );
    }
}

export default Post;