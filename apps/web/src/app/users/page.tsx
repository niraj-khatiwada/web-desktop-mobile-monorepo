"use client";
import Link from "next/link";
import React from "react";

import { Button } from "ui/src/components/button";

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Button as={Link} href="/users/1">
        User 1
      </Button>
      <br />
      <br />
      <Button as={Link} href="/users/2">
        User 2
      </Button>
    </div>
  );
}

export default Users;
