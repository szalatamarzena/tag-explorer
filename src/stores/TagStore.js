import { create } from 'zustand';

const useTagStore = create(set => ({
  sortBy: '',
  sortDirection: 'asc',
  perPage: 20,
  page: 1,

  setSortBy: sortBy => set({ sortBy }),
  setSortDirection: sortDirection => set({ sortDirection }),
  setPerPage: perPage => set({ perPage }),
  setPage: page => set({ page }),
}));

export default useTagStore;
