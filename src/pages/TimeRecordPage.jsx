import React from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { FormTimeRecord } from '../components/FormTimeRecord';

export const TimeRecordPage = () => {
  return (
    <>
        <ProtectedRoute>
            <FormTimeRecord />
        </ProtectedRoute>
    </>
  )
}
