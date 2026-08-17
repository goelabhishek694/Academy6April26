import React from "react";
import { Form, Input, Modal, message } from "antd";
import { addMovie } from "../api/movie";

function MovieForm({ open, setOpen, onSuccess }) {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const payload = {
      ...values,
      duration: Number(values.duration),
    };

    const response = await addMovie(payload);

    if (response.success) {
      message.success(response.message);
      //close the modal
      setOpen(false);
      form.resetFields();
      // refresh the movie list by calling the getAllMovies function
      onSuccess();
    } else {
      message.error(response.message);
    }
  };

  return (
    <Modal
      title="Add Movie"
      open={open}
      onCancel={() => {
        setOpen(false);
        form.resetFields();
      }}
      onOk={() => form.submit()}
      okText="Add"
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item label="Movie Name" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Poster URL"
          name="poster"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="Duration (mins)"
          name="duration"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Genre" name="genre" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Language"
          name="language"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Release Date"
          name="date"
          rules={[{ required: true }]}
        >
          <Input type="date" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default MovieForm;
