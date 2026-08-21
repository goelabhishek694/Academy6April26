import React, { useEffect, useState } from "react";
import { Button, Table, Tag, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { getPartnerTheatres } from "../api/theatre.js";
import TheatreForm from "../components/TheatreForm";

function Partner() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTheatres = async () => {
    try {
      setLoading(true);
      const res = await getPartnerTheatres();

      if (res.success) {
        setTheatres(res.data || []);
      } else {
        message.error(res.message || "Failed to fetch theatres");
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTheatres();
  }, []);

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address", ellipsis: true },
    { title: "Phone", dataIndex: "phone", width: 140 },
    { title: "Email", dataIndex: "email", ellipsis: true },
    {
      title: "Status",
      width: 120,
      render: (_, record) =>
        record.isActive ? (
          <Tag color="green">Approved</Tag>
        ) : (
          <Tag color="orange">Pending</Tag>
        ),
    },
    {
      title: "Add shows",
      render: (_, record) => record.isActive && (
        <Button onClick={() => navigate(`/partner/theatres/${record._id}/shows`)}>+ Shows</Button>
      )
    }
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h2 style={{ margin: 0 }}>Partner Theatres</h2>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>
          Add Theatre
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={theatres}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 6 }}
      />

      <TheatreForm
        open={open}
        setOpen={setOpen}
        onSuccess={() => {
          setOpen(false);
          fetchTheatres();
        }}
      />
    </div>
  );
}

export default Partner;
