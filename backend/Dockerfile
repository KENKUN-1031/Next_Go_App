# # ベースイメージを指定
# FROM golang:latest

# # コンテナ内の作業ディレクトリを設定
# WORKDIR /app

# # ローカルのソースコードをコンテナにコピー
# COPY . .

# # 必要なパッケージをインストール
# RUN go mod download

# # アプリケーションをビルド
# RUN go build -o main .

# # 公開予定のコンテナのポートを明示
# EXPOSE 8080

# # アプリケーションを実行
# CMD ["go", "run", "main.go"]


# ベースイメージを指定
FROM golang:1.18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# ソースコードをコピー
COPY . .

# 依存関係をインストール
RUN go mod download

# アプリケーションをビルド
RUN go build -o main .

# ポート番号を指定
EXPOSE 8080

# アプリケーションを起動
CMD ["./main"]
