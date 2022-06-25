interface CommonSwaggerCustomOptions {
  useGlobalPrefix?: boolean;
}

export interface FastifySwaggerCustomOptions
  extends CommonSwaggerCustomOptions {
  uiConfig?: Partial<{
    deepLinking: boolean;
    displayOperationId: boolean;
    defaultModelsExpandDepth: number;
    defaultModelExpandDepth: number;
    defaultModelRendering: string;
    displayRequestDuration: boolean;
    docExpansion: string;
    filter: boolean | string;
    layout: string;
    maxDisplayedTags: number;
    showExtensions: boolean;
    showCommonExtensions: boolean;
    useUnsafeMarkdown: boolean;
    syntaxHighlight:
      | {
          activate?: boolean;
          theme?: string;
        }
      | false;
    tryItOutEnabled: boolean;
    validatorUrl: string | null;
    persistAuthorization: boolean;
    tagsSorter: string;
    operationsSorter: string;
    queryConfigEnabled: boolean;
  }>;
  initOAuth?: Record<string, any>;
  staticCSP?: boolean | string | Record<string, string | string[]>;
  transformStaticCSP?: (header: string) => string;
  uiHooks?: {
    onRequest?: Function;
    preHandler?: Function;
  };
}

export type SwaggerCustomOptions =
  | FastifySwaggerCustomOptions;
