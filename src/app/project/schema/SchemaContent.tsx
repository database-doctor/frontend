"use client";

import React, { useState } from "react";

import { GetSchemas } from "@/graphql/queries/Project.graphql";
import { Schema } from "@/components/project/schema/Schema";
import { SchemaControl } from "@/components/project/schema/SchemaControl";
import { getBearerFromToken } from "@/utils/clientauth";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

export const SchemaContent = () => {
  const params = useSearchParams();
  const projectId = params.get("projectId");
  const [schemaId, setSchemaId] = useState<number>(0);

  const { data: session } = useSession();

  const { loading, data } = useQuery(GetSchemas, {
    variables: {
      pid: Number(projectId),
    },
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  const schemas = data.project.schemas;

  return (
    <>
      <SchemaControl
        schemaId={schemaId}
        setSchemaId={setSchemaId}
        schemas={schemas}
      />
      {schemas.length > 0 && (
        <Schema
          schemaId={schemas[schemaId].sid}
          isLatestSchema={schemaId == 0}
        />
      )}
    </>
  );
};
