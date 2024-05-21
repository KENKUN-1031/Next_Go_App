# # ベースイメージを指定
# FROM golang:1.18-alpine

# # 作業ディレクトリを設定
# WORKDIR /app

# # ソースコードをコピー
# COPY . .

# # 依存関係をインストール
# RUN go mod download

# # アプリケーションをビルド
# RUN go build -o main .

# # ポート番号を指定
# EXPOSE 8080

# # アプリケーションを起動
# CMD ["./main"]


# Dockerfile.backend
FROM golang:1.20-alpine

# Airのインストール
RUN apk add --no-cache git curl && \
    curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s

WORKDIR /app

COPY . .

RUN go mod tidy

CMD ["air"]
