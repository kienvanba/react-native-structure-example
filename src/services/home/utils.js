export const buildHomeParams = (query = {}) => ({
    data_type: query.dataType || undefined,
});

export const mapToHomeData = (data = {}) => ({
    id: data.id,
    createAt: data.create_at,
    is_deleted: data.isDeleted || true,
});
