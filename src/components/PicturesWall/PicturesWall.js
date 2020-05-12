import React from 'react';
// ---------------------------- import 'antd/dist/antd.css'; ---------------------------- //
import './styles.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// function getBase64(file) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = error => reject(error);
//     });
// }

class PicturesWall extends React.Component {

    // state = {
    //     previewVisible: false,
    //     previewImage: '',
    //     fileList: [
    //         {
    //             uid: '-1',
    //             name: 'image.png',
    //             status: 'done',
    //             url: '',
    //         },
    //         // {
    //         //     uid: '-2',
    //         //     name: 'image.png',
    //         //     status: 'done',
    //         //     url: '',
    //         // },
    //         // {
    //         //     uid: '-3',
    //         //     name: 'image.png',
    //         //     status: 'done',
    //         //     url: '',
    //         // },
    //         // {
    //         //     uid: '-4',
    //         //     name: 'image.png',
    //         //     status: 'done',
    //         //     url: '',
    //         // },
    //         // {
    //         //     uid: '-5',
    //         //     name: 'image.png',
    //         //     status: 'error',
    //         // },
    //     ],
    // };

    // handleCancel = () => this.setState({ previewVisible: false });
    //
    // handlePreview = async file => {
    //     if (!file.url && !file.preview) {
    //         file.preview = await getBase64(file.originFileObj);
    //     }
    //
    //     this.setState({
    //         previewImage: file.url || file.preview,
    //         previewVisible: true,
    //     });
    // };
    //
    // handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList } = this.props;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className='picture_wall'>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.props.onPreview}
                    onChange={this.props.onChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.props.onCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default PicturesWall