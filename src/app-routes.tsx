import { Routes, Route } from "react-router";
import Main from "./pages/main";
import JsonFormRenderer from "./pages/a2-json-form-renderer";
import PaginatedTable from "./pages/a3-paginated-table";
import SticketDetail from "./pages/a1-layout-implementation/screen-1-sticket-detail";
import WorkPackages from "./pages/a1-layout-implementation/screen-2-work-packages";
import UserManagement from "./pages/a1-layout-implementation/screen-3-user-management";
import AppLayout from "./layouts/app-layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="a1">
        <Route element={<AppLayout />}>
          <Route path="screen-1" element={<SticketDetail />} />
          <Route path="screen-2" element={<WorkPackages />} />
        </Route>
        <Route path="screen-3" element={<UserManagement />} />
      </Route>
      <Route path="a2" element={<JsonFormRenderer />} />
      <Route path="a3" element={<PaginatedTable />} />
    </Routes>
  )
}

export default AppRoutes