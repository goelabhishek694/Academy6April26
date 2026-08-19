import React, { useEffect } from "react";
import { Form, Input, Modal, message } from "antd";
import { addMovie, updateMovie } from "../api/movie";

function MovieForm({ open, setOpen, onSuccess, selectedMovie }) {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const payload = {
      ...values,
      duration: Number(values.duration),
    };

    const response = selectedMovie
      ? await updateMovie(selectedMovie._id, payload)
      : await addMovie(payload);

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

  useEffect(() => {
    //edit movie form
    if (selectedMovie) {
      form.setFieldsValue({
        title: selectedMovie.title,
        poster: selectedMovie.poster,
        description: selectedMovie.description,
        duration: selectedMovie.duration,
        genre: selectedMovie.genre,
        language: selectedMovie.language,
        date: selectedMovie.date ? selectedMovie.date.slice(0, 10) : "",
      });
    } else {
      //add movie form
      form.resetFields();
    }
  }, [selectedMovie, form]);

  return (
    <Modal
      title={selectedMovie ? "Edit Movie" : "Add Movie"}
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
