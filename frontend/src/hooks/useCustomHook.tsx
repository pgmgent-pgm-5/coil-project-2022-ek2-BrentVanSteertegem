import { DocumentNode, OperationVariables, TypedDocumentNode, useQuery } from '@apollo/client'

export const useCustomHook = (query: DocumentNode | TypedDocumentNode<any, OperationVariables>) => {
    const { data, loading, error } = useQuery(query)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return data
}