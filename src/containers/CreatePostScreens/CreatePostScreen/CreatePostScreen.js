import React, { Component } from 'react';
import PicturesWall from "../../../components/PicturesWall/PicturesWall";

import './styles.css';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


class CreatePostScreen extends Component {

    state = {
        title:'',
        message:'',
        targetInput:'',
        previewVisible: false,
        previewImage: '',
        fileList: [
            // {
            //     uid: '-1',
            //     name: 'image.png',
            //     status: 'done',
            //     url: '',
            // },
            // {
            //     uid: '-2',
            //     name: 'image.png',
            //     status: 'done',
            //     url: '',
            // },
            // {
            //     uid: '-3',
            //     name: 'image.png',
            //     status: 'done',
            //     url: '',
            // },
            // {
            //     uid: '-4',
            //     name: 'image.png',
            //     status: 'done',
            //     url: '',
            // },
            // {
            //     uid: '-5',
            //     name: 'image.png',
            //     status: 'error',
            // },
        ],
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => {
        this.setState({ fileList });
    }

    onChangeTitle = (term) => {
        this.setState({title: term.target.value})
    }

    onChangeMessage = (term) => {
        this.setState({message: term.target.value})
    }



        addHashtag = () => {
            const {message} = this.state
            this.setState({message: message+ '#' })
        }

        addPictureHash = () => {
            const {message} = this.state
            this.setState({message: message+ '#Picture' })
        }

        addVideoHash = () => {
            const {message} = this.state
            this.setState({message: message+ '#Video' })
        }

        addMusicHash = () => {
            const {message} = this.state
            this.setState({message: message+ '#Music' })
        }




    render() {
        const {title, message, previewVisible, previewImage, fileList} = this.state

        return (
            <div className='create_post_window'>
                <div className='input_post_page'>
                    <input id='headline' type='text' value={title}   onChange={this.onChangeTitle}
                           placeholder={'Headline'}
                    />
                    <input id='post_text' type='text' value={message} onChange={this.onChangeMessage}
                           placeholder={'Simply select the element to apply a gradient and run the plugin. Choose from ' +
                           '350+ gradients to add to frames, groups, and te...'}
                    />
                </div>
                <div>
                    <PicturesWall onPreview={this.handlePreview} onChange={this.handleChange} onCancel={this.handleCancel}
                                  previewVisible={previewVisible} previewImage={previewImage} fileList={fileList}/>
                </div>
                <div className='btn_post_window'>
                    <button onClick={this.addHashtag}>Hashtag</button>
                    <button onClick={this.addPictureHash}>#Picture</button>
                    <button onClick={this.addVideoHash}>#Video</button>
                    <button onClick={this.addMusicHash}>#Music</button>
                    <button onClick={()=>this.props.onClick(title, message, fileList)}>to Post</button>
                </div>
            </div>
        )
    }
}

export default CreatePostScreen;